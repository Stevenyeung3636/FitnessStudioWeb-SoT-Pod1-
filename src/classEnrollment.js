var enrolled = [];

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/classes/1", // Replace with the actual backend URL
        type: "GET",
        crossDomain: true,
        success: function(response) {
          // Parse the JSON response
          var classes = JSON.parse(response);
          
          // Loop through the classes and add them to the HTML
          for (var i = 0; i < classes.length; i++) {
            var classData = classes[i];
            var className = classData.name +  " | " + classData.description + " | " + classData.instructor + " | " + classData.schedule;
            // var classStatus = classData.status;
            var classId = classData.id;
            enrolled.push(classId);
            var classSchedule = classData.schedule;
            
            // Create the HTML elements for the class
            var classElement = $("<div>").addClass("d-flex text-body-secondary pt-3");
            var svgElement = $("<svg>").addClass("bd-placeholder-img flex-shrink-0 me-2 rounded")
              .attr("width", "32")
              .attr("height", "32")
              .attr("xmlns", "http://www.w3.org/2000/svg")
              .attr("role", "img")
              .attr("aria-label", "Placeholder: 32x32")
              .attr("preserveAspectRatio", "xMidYMid slice")
              .attr("focusable", "false");
            var divElement = $("<div>").addClass("pb-3 mb-0 small lh-sm border-bottom w-100");
            var justifyBetweenElement = $("<div>").addClass("d-flex justify-content-between");
            var strongElement = $("<strong>").addClass("text-gray-dark").text(className);
            // var buttonElement = $("<button>").addClass("enrollBtn").attr('id', classId).text("Enroll");
            var spanElement = $("<span>").addClass("d-block").text(classSchedule);
            
            // Add SVG content
            // if (classStatus == 1) {
              svgElement.append(
                $("<title>").text("Placeholder"),
                $("<rect>").attr("width", "100%").attr("height", "100%").attr("fill", "#e83e8c"),
                $("<text>").attr("x", "50%").attr("y", "50%").attr("fill", "#e83e8c").attr("dy", ".3em").text("32x32")
              );
            // } else {
            //   svgElement.append(
            //     $("<title>").text("Placeholder"),
            //     $("<rect>").attr("width", "100%").attr("height", "100%").attr("fill", "#007bff"),
            //     $("<text>").attr("x", "50%").attr("y", "50%").attr("fill", "#e83e8c").attr("dy", ".3em").text("32x32")
            //   );
            // }
            
            
            // Construct the class structure
            // if (classStatus == 1) {
              justifyBetweenElement.append(strongElement);
            // } else {
            //   justifyBetweenElement.append(strongElement, buttonElement);
            // }
            
            divElement.append(justifyBetweenElement, spanElement);
            classElement.append(svgElement, divElement);
            
            // Append the class element to the body or any desired container
            // if (classStatus == 1) {
              $(".enrollList").append(classElement);
            // } else {
            //   $(".availableList").append(classElement);
            // }
            
          }
        }
      });

      $.ajax({
        url: "http://localhost:8080/classes", // Replace with the actual backend URL
        type: "GET",
        crossDomain: true,
        success: function(response) {
          // Parse the JSON response
          var classes = JSON.parse(response);
          
          // Loop through the classes and add them to the HTML
          for (var i = 0; i < classes.length; i++) {
            var classData = classes[i];
            var className = classData.name +  " | " + classData.description + " | " + classData.instructor + " | " + classData.schedule;
            var classId = classData.id;
            // var classStatus = classData.status;
            var classSchedule = classData.schedule;
            
            // Create the HTML elements for the class
            var classElement = $("<div>").addClass("d-flex text-body-secondary pt-3");
            var svgElement = $("<svg>").addClass("bd-placeholder-img flex-shrink-0 me-2 rounded")
              .attr("width", "32")
              .attr("height", "32")
              .attr("xmlns", "http://www.w3.org/2000/svg")
              .attr("role", "img")
              .attr("aria-label", "Placeholder: 32x32")
              .attr("preserveAspectRatio", "xMidYMid slice")
              .attr("focusable", "false");
            var divElement = $("<div>").addClass("pb-3 mb-0 small lh-sm border-bottom w-100");
            var justifyBetweenElement = $("<div>").addClass("d-flex justify-content-between");
            var strongElement = $("<strong>").addClass("text-gray-dark").text(className);
            var buttonElement = $("<button>").addClass("enrollBtn").attr('id', classId).text("Enroll");
            var spanElement = $("<span>").addClass("d-block").text(classSchedule);
            
            // Add SVG content
            if (enrolled.includes(className)) {
              svgElement.append(
                $("<title>").text("Placeholder"),
                $("<rect>").attr("width", "100%").attr("height", "100%").attr("fill", "#e83e8c"),
                $("<text>").attr("x", "50%").attr("y", "50%").attr("fill", "#e83e8c").attr("dy", ".3em").text("32x32")
              );
            } else {
              svgElement.append(
                $("<title>").text("Placeholder"),
                $("<rect>").attr("width", "100%").attr("height", "100%").attr("fill", "#007bff"),
                $("<text>").attr("x", "50%").attr("y", "50%").attr("fill", "#e83e8c").attr("dy", ".3em").text("32x32")
              );
            }
            
            
            // Construct the class structure
            if (enrolled.includes(className) == 1) {
              justifyBetweenElement.append(strongElement);
            } else {
              justifyBetweenElement.append(strongElement, buttonElement);
            }
            
            divElement.append(justifyBetweenElement, spanElement);
            classElement.append(svgElement, divElement);
            
            // Append the class element to the body or any desired container
            // if (classStatus == 1) {
              // $(".enrollList").append(classElement);
            // } else {
              $(".availableList").append(classElement);
            // }
            
          }
        }
      });


    $(".enrollBtn").click(function() {
      const id = $(this).attr("id");
      $.ajax({
        url: "http://localhost:8080/enrollments", // Replace with the actual backend URL 
        type: "POST",
        data: JSON.stringify({
          studentId: 1,
          classId: id
        }),
        success: function(response) {
          // Handle the response from the backend
          
        },
      });
      alert("The class has been enrolled")
      location.reload();
    });
  });