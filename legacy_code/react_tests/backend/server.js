const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const dotenv = require('dotenv');
const homeImages = require('./data/homeImages');
const photoPageImages = require('./data/photoPageImages');
const app = express();

console.log("Server is starting...");

// Load environment variables from .env file
dotenv.config();  // This will load the variables from .env into process.env

// Use CORS to allow requests from your frontend
app.use(cors());

// Ensure that environment variables for AWS credentials are set
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  console.error("AWS credentials are not set in environment variables!");
  process.exit(1); // Exit the app if credentials are missing
}

// Configure AWS SDK with credentials, region, and signature version
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Access Key ID from .env
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Secret Access Key from .env
  region: 'us-east-2', // Ensure this matches your S3 bucket region
  signatureVersion: 'v4', // Use AWS Signature Version 4
});

const s3 = new AWS.S3();

// Endpoint to generate signed URLs
app.get('/get-signed-urls', async (req, res) => {
  try {
    // Generate signed URLs for each image key
    const signedUrls = await Promise.all(homeImages.map(async (key) => {
      const params = {
        Bucket: 'troyschwab-resources', // Ensure this matches your S3 bucket name
        Key: key,
        Expires: 60 * 60, // URL valid for 1 hour (3600 seconds)
      };

      // Get signed URL from S3
      const url = await s3.getSignedUrlPromise('getObject', params);

      // Return URL along with the image dimensions (customize as needed)
      return { src: url, width: 2376, height: 3583 }; // Modify width/height per image if necessary
    }));

    // Send the array of signed URLs as the response
    res.json(signedUrls);
  } catch (err) {
    console.error('Error generating signed URLs', err);
    res.status(500).send('Error generating signed URLs');
  }
});


// Endpoint to generate signed URLs for the photo page
app.get('/get-signed-urls-photos', async (req, res) => {
  try {
    const signedUrls = await Promise.all(photoPageImages.map(async (key) => {
      const params = {
        Bucket: 'troyschwab-resources',
        Key: key,
        Expires: 60 * 60,
      };
      const url = await s3.getSignedUrlPromise('getObject', params);
      return { midres: url, width: 2376, height: 3583 }; // Modify as needed
    }));
    res.json(signedUrls);
  } catch (err) {
    console.error('Error generating signed URLs for photos', err);
    res.status(500).send('Error generating signed URLs for photos');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
