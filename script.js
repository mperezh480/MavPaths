
                function selectOption() {
                    let dropdown = document.getElementById('choice1');
                    // get the index of the selected option
                    let selectedIndex = dropdown.selectedIndex;
                    // get a selected option and text value using the text property
                    let selectedValue = dropdown.options[selectedIndex].text;
                


                 switch(selectedValue) {
                    case "Central Community College":
                        
                        const cent = [
                            "Architectural Engineering focus A.S",
                            "Civil Engineering focus A.S",
                            "Computer Engineering focus A.S",
                            "Construction Engineering focus A.S",
                            "Construction Management focus A.S",
                            "Criminology and Criminal Justice A.A",
                            "Electrical Engineering focus A.S",
                            "Theatre focus A.A"];

                            var select = document.getElementById("nameSelect");
                            var uno = document.getElementById("unoSelect");
                            for ( let i = 0; i < cent.length; i++ ) {
                                $("#nameSelect").append("<option value=" + cent[i] +">" + cent[i] + "</option>");
                            }
                        break;
                    
                    default:
                        document.getElementById("demo").innerHTML = "You selected noting";
                    } 
                }


                function selectcoll() {
                    let dropdown = document.getElementById('nameSelect');
                    // get the index of the selected option
                    let selectedIndex = dropdown.selectedIndex;
                    // get a selected option and text value using the text property
                    let selectedValue = dropdown.options[selectedIndex].text;

                    switch(selectedValue) {
                        case "Architectural Engineering focus A.S":
                            
                            const arch = [
                                "Architectural Engineering focus B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < arch.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + arch[i] +">" + arch[i] + "</option>");
                                }
                            break;

                        case "Civil Engineering focus A.S":
                            
                            const civ = [
                                "Civil Engineering B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < civ.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + civ[i] +">" + civ[i] + "</option>");
                                }
                        break;
                        case "Computer Engineering focus A.S":
                            
                            const comp = [
                                "Computer Engineering B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < comp.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + comp[i] +">" + comp[i] + "</option>");
                                }
                            break;

                        case "Construction Engineering focus A.S":
                            
                            const cone = [
                                "Construction Engineering B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < cone.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + con[i] +">" + con[i] + "</option>");
                                }
                        break;
                        case "Construction Management focus A.S":
                            
                            const conm = [
                                "Construction Management B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < conm.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + conm[i] +">" + conm[i] + "</option>");
                                }
                            break;

                        case "Criminology and Criminal Justice A.A":
                            
                            const crim = [
                                "Criminology and Criminal Justice B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < crim.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + crim[i] +">" + crim[i] + "</option>");
                                }
                        break;
                        case "Electrical Engineering focus A.S":
                            
                            const ele = [
                                "Computer Engineering B.S",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < ele.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + ele[i] +">" + ele[i] + "</option>");
                                }
                            break;

                        case "Theatre focus A.A":
                            
                            const tre = [
                                "Theatre B.A",
                                ];
    
                                var uno = document.getElementById("unoSelect");
                                for ( let i = 0; i < tre.length; i++ ) {
                                    $("#unoSelect").append("<option value=" + tre[i] +">" + tre[i] + "</option>");
                                }
                        break;
                        
                        default:
                            document.getElementById("ex").innerHTML = "You selected noting";
                        } 
                }
