// src/pages/BlogPost.js
import React from 'react';

const BlogPost = ({ post }) => {
  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      width: '20%',
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '22px',
      margin: '20px 0 10px',
      textAlign: 'center',
    },
    snippet: {
      fontSize: '16px',
      width: '46%',
      marginBottom: '20px',
      textAlign: 'left',
    },
    recipe: {
        fontSize: '16px',
        width: '46%',
        marginBottom: '20px',
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
      },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{post.title}</h2>
      <img src={post.image} alt={post.title} style={styles.image} />
      <p style={styles.snippet}>{post.snippet}</p>
      {'\n'}{'\n'}
      <p style={styles.recipe}>{post.recipe}</p>
      {/* <pre style={styles.recipe}>{post.recipe}</pre> */}
    </div>
  );
};

export default BlogPost;
