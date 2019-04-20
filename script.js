function myFunction(event) {
    var x = event.which || event.keyCode;
    if (x == "13")
    {
        $("#btn").trigger("click"); 
    }
    else{
        $("#btn").trigger("click");
         document.getElementById('demo').innerHTML = "";
       
    }
    
  }

function bul(){
    var txt = document.getElementById('text').value; 
    var user = newLevel.find(function (user) {
        if (user.Level === txt) {
            document.getElementById('demo').innerHTML = txt + " için gereken exp : " + user.Exp;
        }
      })

}

var newLevel = [
    { Level : '01->02', Exp : 300},
    { Level : '02->03', Exp : 800},
    { Level : '03->04', Exp : 1500},
    { Level : '04->05', Exp : 2500},
    { Level : '05->06', Exp : 4300},
    { Level : '06->07', Exp : 7200},
    { Level : '07->08', Exp : 11000},
    { Level : '08->09', Exp : 17000},
    { Level : '09->10', Exp : 24000},
    { Level : '10->11', Exp : 33000},
    { Level : '11->12', Exp : 43000},
    { Level : '12->13', Exp : 58000},
    { Level : '13->14', Exp : 76000},
    { Level : '14->15', Exp : 100000},
    { Level : '15->16', Exp : 130000},
    { Level : '16->17', Exp : 169000},
    { Level : '17->18', Exp : 219000},
    { Level : '18->19', Exp : 283000},
    { Level : '19->20', Exp : 365000},
    { Level : '20->21', Exp : 472000},
    { Level : '21->22', Exp : 610000},
    { Level : '22->23', Exp : 705000},
    { Level : '23->24', Exp : 813000},
    { Level : '24->25', Exp : 937000},
    { Level : '25->26', Exp : 1077000},
    { Level : '26->27', Exp : 1237000},
    { Level : '27->28', Exp : 1418000},
    { Level : '28->29', Exp : 1624000},
    { Level : '29->30', Exp : 1857000},
    { Level : '30->31', Exp : 2122000},
    { Level : '31->32', Exp : 2421000},
    { Level : '32->33', Exp : 2761000},
    { Level : '33->34', Exp : 3145000},
    { Level : '34->35', Exp : 3580000},
    { Level : '35->36', Exp : 4073000},
    { Level : '36->37', Exp : 4632000},
    { Level : '37->38', Exp : 5194000},
    { Level : '38->39', Exp : 5717000},
    { Level : '39->40', Exp : 6264000},
    { Level : '40->41', Exp : 6837000},
    { Level : '41->42', Exp : 7600000},
    { Level : '42->43', Exp : 8274000},
    { Level : '43->44', Exp : 8990000},
    { Level : '44->45', Exp : 9753000},
    { Level : '45->46', Exp : 10560000},
    { Level : '46->47', Exp : 11410000},
    { Level : '47->48', Exp : 12320000},
    { Level : '48->49', Exp : 13270000},
    { Level : '49->50', Exp : 14280000},
    { Level : '50->51', Exp : 15340000},
    { Level : '51->52', Exp : 16870000},
    { Level : '52->53', Exp : 18960000},
    { Level : '53->54', Exp : 19980000},
    { Level : '54->55', Exp : 21420000},
    { Level : '55->56', Exp : 22930000},
    { Level : '56->57', Exp : 24530000},
    { Level : '57->58', Exp : 26200000},
    { Level : '58->59', Exp : 27960000},
    { Level : '59->60', Exp : 29800000},
    { Level : '60->61', Exp : 32780000},
    { Level : '61->62', Exp : 36060000},
    { Level : '62->63', Exp : 39670000},
    { Level : '63->64', Exp : 43640000},
    { Level : '64->65', Exp : 48000000},
    { Level : '65->66', Exp : 52800000},
    { Level : '66->67', Exp : 58080000},
    { Level : '67->68', Exp : 63890000},
    { Level : '68->69', Exp : 70280000},
    { Level : '69->70', Exp : 77310000},
    { Level : '70->71', Exp : 85040000},
    { Level : '71->72', Exp : 93540000},
    { Level : '72->73', Exp : 102900000},
    { Level : '73->74', Exp : 113200000},
    { Level : '74->75', Exp : 124500000},
    { Level : '75->76', Exp : 137000000},
    { Level : '76->77', Exp : 150700000},
    { Level : '77->78', Exp : 165700000},
    { Level : '78->79', Exp : 236990000},
    { Level : '79->80', Exp : 260650000},
    { Level : '80->81', Exp : 286780000},
    { Level : '81->82', Exp : 315380000},
    { Level : '82->83', Exp : 346970000},
    { Level : '83->84', Exp : 381680000},
    { Level : '84->85', Exp : 419770000},
    { Level : '85->86', Exp : 461760000},
    { Level : '86->87', Exp : 508040000},
    { Level : '87->88', Exp : 558740000},
    { Level : '88->89', Exp : 614640000},
    { Level : '89->90', Exp : 676130000},
    { Level : '90->91', Exp : 743730000},
    { Level : '91->92', Exp : 1041222000},
    { Level : '92->93', Exp : 1145344200},
    { Level : '93->94', Exp : 1259878620},
    { Level : '94->95', Exp : 1385866482},
    { Level : '95->96', Exp : 1524453130},
    { Level : '96->97', Exp : 1676898443},
    { Level : '97->98', Exp : 1844588288},
    { Level : '98->99', Exp : 2029047116}];