let award_name = sessionStorage.getItem("name");
let user_point = sessionStorage.getItem("points");

document.querySelector(".Username").innerHTML = `Well-done! ${award_name}`;
document.querySelector(".user_points .span_points").innerHTML = `${user_point}`;
