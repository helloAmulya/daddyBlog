document.getElementById('blogForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const author = document.getElementById('author').value;

  try {
    const response = await fetch('https://rndblog1.vercel.app/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author }),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Blog posted successfully!');
      document.getElementById('blogForm').reset();
    } else {
      console.error('Error response:', result);
      alert('Error posting blog. Please try again.');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('Failed to connect to the server.');
  }
});
