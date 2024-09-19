const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const app = express();

// Use CORS to allow requests from your frontend
app.use(cors());

// Configure AWS SDK with credentials, region, and signature version
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // store credentials securely in environment variables
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2', // correct region where your S3 bucket is located
  signatureVersion: 'v4', // Ensure you're using AWS Signature Version 4
});

const s3 = new AWS.S3();

app.get('/get-signed-urls', async (req, res) => {
    const imageKeys = [
      "photography/midres/94890036.JPG",
      "photography/midres/94930032.JPG",
      "photography/midres/94930003.JPG",
      // Add the rest of your image keys here
    ];
  
    try {
      const signedUrls = await Promise.all(imageKeys.map(async (key) => {
        const params = {
          Bucket: 'troyschwab-resources',
          Key: key,
          Expires: 60 * 60, // URL valid for 1 hour
        };
        const url = await s3.getSignedUrlPromise('getObject', params);
        return { src: url, width: 2376, height: 3583 }; // Add actual width/height
      }));
  
      res.send(signedUrls);
    } catch (err) {
      console.error('Error generating signed URLs', err);
      res.status(500).send('Error generating signed URLs');
    }
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
