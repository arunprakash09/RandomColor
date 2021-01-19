function myfunction() {
    var myArray = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF', '#454545', '#999999', '#000080', '#008080', '#00FFFF', '#00FF00', '#808000','#000000'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("div").style.backgroundColor = rand;
    document.getElementById("output").value = rand;
}
