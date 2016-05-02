/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Victor Simon";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 var bio = {
 	name: "",
 	role: "",
 	contacts: {

 	},
 	skills: [],
 	bioPic: ""
 }

 var education = {
 	schools: [
 		{
 			name: "",
 			city: ""
 		},
 		{
 			name: "",
 			city: ""
 		}
 	],
 	onlineCourses: [
 		{

 		}
 	]
 }

 var work = {
 	jobs: [
 		{
 			employer: "",
 			title: ""
 		},
 		{
 			employer: "",
 			title: ""
 		}
 	]
 }

 var projects = {
 	projects: [
 		{
 			title: "",
 			dates: "",
 			description: "",
 			images: [

 			]
 		}
 	]
 }