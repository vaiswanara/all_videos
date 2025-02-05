fetch('youtube_data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data['Vedic Astrology Basics']); // Access all videos in this playlist
        console.log(data['Vedic Astrology Basics'][0].videoName); // First video name
    });
