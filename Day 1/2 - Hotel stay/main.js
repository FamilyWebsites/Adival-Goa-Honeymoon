window.onload = function() {
    // Get all images on the page
    var images = document.querySelectorAll('img');
    var totalImages = images.length;
    var imagesLoaded = 0;

    // Function to check if all images are loaded
    function checkImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            // Hide the loading screen
            document.getElementById('loading-screen').style.display = 'none';
            // Show the content
            document.getElementById('content').style.display = 'block';
        }
    }

    // Loop through each image and attach onload event listener
    images.forEach(function(image) {
        if (image.complete) {
            checkImagesLoaded();
        } else {
            // If not, attach load event listener
            image.onload = function() {
                checkImagesLoaded();
            };
        }
        // In case the image fails to load, still proceed to check images loaded
        image.onerror = function() {
            checkImagesLoaded();
        }
    });
};
