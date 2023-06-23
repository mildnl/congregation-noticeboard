// Import the fetch function
import { onMount } from 'svelte';

onMount(async () => {
  try {
    const response = await fetch('http://your-backend-api-endpoint');
    const data = await response.json();
    // Handle the fetched data, e.g., store it in a Svelte store or component property
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
