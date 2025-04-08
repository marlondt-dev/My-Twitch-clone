<template>
    <div class="show-more-line">
      <hr class="line">
      <span class="text">Show more</span>
      <hr class="line">
    </div>
  </template>
  
  <style scoped>
  .show-more-line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .line {
    border: none;
    border-top: 0.1em solid #ccc; /* 1px = 0.0625em (aproximadamente) */
    width: 40%;
    margin: 0 1em;
  }
  
  .text {
    color: #007bff;
    font-size: 1em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    white-space: nowrap;
  }
  </style>