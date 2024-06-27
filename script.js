// Detailed:
// Here, getPic(targetPart) is a newly declared function which displays the correct images based on the parameter,
// targetPart. targetPart will pass certain string arguments through clicking specific HTML elements under Table Column 
// 2, and an image appears when a target part has been properly selected by appending the string "Pic". targetPart and 
// targetPart+"Pic" correspond to a specific part's ID in the HTML, with the correct corresponding ID to the image which 
// displays because of the function that alters the display style. Through the parameter, this function was designed 
// with abstraction in mind so that this function will effectively show images and need no further accomodations 
// if more part images or descriptions are needed.

// Purpose: 
// To display the correct part image based on the selected part under "Part Name".

// Trigger: 
// Single click on any of the part names, and the corresponding image shows.

function getPic(targetPart) {
    document.getElementById(targetPart+"Pic").style.display="block";
}

// Detailed: 
// Similar to above, hidePic(targetPart) is another newly declared function which hides the proper images through
// the same parameter, targetPart. targetPart will pass a specific string argument based on double clicking specific
// HTML image elements under Table Column 3. Double clicking the image passes the correct argument with "Pic" appended
// towards the end, and like the first function, the correct image is targeted and then hidden because of this function.
// The display of the image is changed to "none" which hides the image altogether, and combined with the first function,
// it could showcase and hide images based on what the user wants to see. Likewise, this function is abstract to allow
// for any other accomodations where more part images or descriptions are needed.

// Purpose: 
// To hide the correct part image based on what image is displayed; displayed images only happen by initially 
// using the first function, getPic(targetPart).

// Trigger:
// Double click any images that were showcased through the first function, getPic(targetPart), and those images will
// be properly hidden.

function hidePic(targetPart) {
    document.getElementById(targetPart+"Pic").style.display="none";
}

//WIP: Considering the combination of both final buttons.
// function buttonFunction() {
//     var btn = document.getElementById("assemble");

//         if (btn.value == "assemble") {
//             btn.value = "disassemble";
//             btn.innerHTML = "Disassemble";
//         }
//         else {
//             btn.value = "assemble";
//             btn.innerHTML = "Assemble";
//         }
//         console.log(btn);
//         return btn;
// }


// PROTOTYPES:
// Multi-parameter function
// function blockPic(targetPart, 0) {
//     if (num == 0) {
//     document.getElementById(targetPart+"Pic").style.display="none";
//   }
// }

// Variable
// var num;

// // Function
// function boolean(Num) {
//     num = Num;
//     console.log(num);
// }
