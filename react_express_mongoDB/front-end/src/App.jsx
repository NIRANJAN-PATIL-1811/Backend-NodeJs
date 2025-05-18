function App() {
  return (
    <>
      <h1>Video Streaming Demo</h1>
      <video width="640" height="360" controls>
        <source src="http://localhost:3000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default App;
