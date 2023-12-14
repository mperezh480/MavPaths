
function selectOption() {
let dropdown = document.getElementById('choice1');
// get the index of the selected option
let selectedIndex = dropdown.selectedIndex;
// get a selected option and text value using the text property
let selectedValue = dropdown.options[selectedIndex].text;
                


    switch(selectedValue) {
    case "Select A School":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const clear = [
            "Select A Degree",
            ];
            for ( let i = 0; i < clear.length; i++ ) {
                $("#nameSelect").append("<option value=" + clear[i] +">" + clear[i] + "</option>");
            }
        break;

    case "Central Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const cent = [
            "Architectural Engineering focus A.S",
            "Civil Engineering focus A.S",
            "Computer Engineering focus A.S",
            "Construction Engineering focus A.S",
            "Construction Management focus A.S",
            "Criminology and Criminal Justice A.A",
            "Electrical Engineering focus A.S",
            "Theatre focus A.A"];


            for ( let i = 0; i < cent.length; i++ ) {
                $("#nameSelect").append("<option value=" + cent[i] +">" + cent[i] + "</option>");
            }
        break;
    
    case "Iowa Western Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  IWCC= ["Business Administration A.A"];
            for ( let i = 0; i < IWCC.length; i++ ) {
                $("#nameSelect").append("<option value=" + IWCC[i] +">" + IWCC[i] + "</option>");
            }
        break
    case "Little Priest Tribal College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  LPTC= ["Biology A.S", "Business A.S", "Sociology focus A.A.L.A"];
            for ( let i = 0; i < LPTC.length; i++ ) {
                $("#nameSelect").append("<option value=" + LPTC[i] +">" + LPTC[i] + "</option>");
            }
        break;
    case "Metropolitan Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  MCC= [
            "Architectural Engineering focus L.A.T.A.S",
            "Aviation focus L.A.T.A.S",
            "Biology focus L.A.T.A.S",
            "Fire Science Technology F.S.A.A.S",
            "Fire Service Management L.A.T.A.A",
            "Business Administration (BSTAA) A.A",
            "Chemistry focus L.A.T.A.S",
            "Civil Engineering focus L.A.T.A.S",
            "Communication Studies focus L.A.T.A.A",
            "Computer Engineering focus L.A.T.A.A",
            "Computer Science (CTSAS) A.S",
            "Construction Engineering focus L.A.T.A.S",
            "Construction Management focus L.A.T.A.S",
            "Criminal Justice A.S",
            "Education - Elementary Education focus (STEM Concentration) L.A.T.A.A",
            "Education - Secondary Education focus (Biology Endorsement) L.A.T.A.S",
            "Education - Secondary Education focus (Chemistry Endorsement) L.A.T.A.S",
            "Education - Secondary Education focus (English Language Arts Endorsement) L.A.T.A.A",
            "Education - Secondary Education focus (Mathematics Endorsement) L.A.T.A.S",
            "Education - Secondary Education focus (Science Endorsement) L.A.T.A.S",
            "Education - Secondary Education focus (Social Science Endorsement) L.A.T.A.A",
            "Electronic Engineering focus L.A.T.A.S",
            "English (American Literature, British/Irish/Anglophone Literature, Language Studies Concentrations) L.A.T.A.A",
            "English (Creative Nonfiction Concentration) L.A.T.A.A",
            "Enviromental Engineering focus L.A.T.A.S",
            "Mathematics focus L.A.T.A.S",
            "Managment Information Systems (CTMAS) A.S",
            "Physics focus L.A.T.A.S",
            "Political Science focus L.A.T.A.A",
            "Psycology focus L.A.T.A.A",
            "Public Health focus L.A.T.A.A",
            "Studio Art (2-D Arts) ARTAA",
            "Studio Art (3-D Arts) ARTAA",
            "Studio Art (Graphic Design) ARTAA",
            "Studio Art (Media Art) ARTAA",
            "Studio Art (Studio Art with K-12 Cert) ARTAA",
            "Sociology focus L.A.T.A.A",
            "Social Work (Human Services Transfer) HSTAA"
        ];
            for ( let i = 0; i < MCC.length; i++ ) {
                $("#nameSelect").append("<option value=" + MCC[i] +">" + MCC[i] + "</option>");
            }
    break;
    case "Mid-Plains Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  MPCC= [
            "Civil Engineering focus A.S",
            "Computer Engineering focus A.S",
            "Construction Engineering focus A.S",
            "Construction Management focus A.S",
            "Electrical Engineering focus A.S"
        ];
            for ( let i = 0; i < MPCC.length; i++ ) {
                $("#nameSelect").append("<option value=" + MPCC[i] +">" + MPCC[i] + "</option>");
            }
    break;
    case "Nebraska Indian Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  NICC= ["General Studies A.A.", "General Liberal Arts(Emergency Management, Concentration in Criminology and Criminal Justice focus) A.A.", "Native American Studies (Contemporary Tribal Leadership Emphasis) A.A.","Native American Studies (History and Traditional Culture Emphasis) A.A"]
            
            for ( let i = 0; i < NICC.length; i++ ) {
                $("#nameSelect").append("<option value=" + NICC[i] +">" + NICC[i] + "</option>");
            }
    break;
    case "Northeast Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  NCC = [
        "Architectural Engineering focus A.S",
        "Business Administration A.A",
        "Civil Engineering focus A.S",
        "Computer Engineering focus A.S",
        "Construction Engineering focus A.S",
        "Construction Management focus A.S",
        "Criminal Justice [Corrections Concentration] A.A",
        "Criminal Justice [Law Enforcement Concentration] A.A",
        "Electrical Engineering focus A.S",
        "Graphic Design A.A",
        "Social Work A.A",
        "Theatre A.A"
        ];

            for ( i = 0; i < NCC.length; i++ ) {
                $("#nameSelect").append("<option value=" + NCC[i] +">" + NCC[i] + "</option>");
            }
    break;
    case "Southeast Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  SCC= [
        "Architectural Engineering focus A.S",
        "Business Administration A.A",
        "Civil Engineering focus A.S",
        "Computer Engineering focus A.S",
        "Construction Engineering focus A.S",
        "Construction Management focus A.S",
        "Criminology and Criminal Justice A.A",
        "Electrical Engineering focus A.S"
        ];

            for ( i = 0; i < SCC.length; i++ ) {
                $("#nameSelect").append("<option value=" + SCC[i] +">" + SCC[i] + "</option>");
            }
        break;
    case "Wayne State College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  WSC= ["Coursework (Pre-Engineering focus)"];
            for ( i = 0; i < WSC.length; i++ ) {
                $("#nameSelect").append("<option value=" + WSC[i] +">" + WSC[i] + "</option>");
            }
        break;
    case "Western Nebraska Community College":
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
        const  WNCC= [
        "Architectural Engineering focus A.S",
        "Civil Engineering focus A.S",
        "Computer Engineering focus A.S",
        "Construction Engineering focus A.S",
        "Construction Management focus A.S",
        "Electrical Engineering focus A.S"];

            for ( i = 0; i < WNCC.length; i++ ) {
                $("#nameSelect").append("<option value=" + WNCC[i] +">" + WNCC[i] + "</option>");
            }
        break;
    default:
        $("#nameSelect").empty();
        $("#nameSelect").append("<option value=none>Select A Degree</option>");
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
        case "Architectural Engineering focus L.A.T.A.S":
            const arch = ["B.S. in Architectural Engineering",];
                for ( let i = 0; i < arch.length; i++ ) {
                    $("#unoSelect").append("<option value=" + arch[i] +">" + arch[i] + "</option>");
                }
        break;
        case "Civil Engineering focus A.S":
        case "Civil Engineering focus L.A.T.A.S":
        case "Coursework (Pre-Engineering focus)":
            const civ = ["B.S in Civil Engineering",];
                for ( let i = 0; i < civ.length; i++ ) {
                    $("#unoSelect").append("<option value=" + civ[i] +">" + civ[i] + "</option>");
                }
        break;
        case "Computer Engineering focus A.S":
        case "Computer Engineering focus L.A.T.A.A":
            const comp = ["B.S in Computer Engineering",];
                for ( let i = 0; i < comp.length; i++ ) {
                    $("#unoSelect").append("<option value=" + comp[i] +">" + comp[i] + "</option>");
                }
            break;
        case "Construction Engineering focus A.S":
        case "Construction Engineering focus L.A.T.A.S":
            const cone = ["B.S in Construction Engineering",];
                for ( let i = 0; i < cone.length; i++ ) {
                    $("#unoSelect").append("<option value=" + con[i] +">" + con[i] + "</option>");
                }
        break;
        case "Construction Management focus A.S":
        case  "Construction Management focus L.A.T.A.S":
            const conm = ["B.S in Construction Management",];
                for ( let i = 0; i < conm.length; i++ ) {
                    $("#unoSelect").append("<option value=" + conm[i] +">" + conm[i] + "</option>");
                }
            break;
        case "Criminology and Criminal Justice A.A":  
        case "Criminal Justice A.S": 
        case "Criminal Justice [Corrections Concentration] A.A":
        case "Criminal Justice [Law Enforcement Concentration] A.A":        
            const crim = ["B.S in Criminology and Criminal Justice",];
                for ( let i = 0; i < crim.length; i++ ) {
                    $("#unoSelect").append("<option value=" + crim[i] +">" + crim[i] + "</option>");
                }
        break;
        case "Electrical Engineering focus A.S":
        case "Electronic Engineering focus L.A.T.A.S":
            const ele = ["B.S. in Electrical Engineering"];
                for ( let i = 0; i < ele.length; i++ ) {
                    $("#unoSelect").append("<option value=" + ele[i] +">" + ele[i] + "</option>");
                }
            break;
        case "Theatre focus A.A":
        case "Theatre A.A":
            const tre = ["B.A in Theatre "];
                for ( let i = 0; i < tre.length; i++ ) {
                    $("#unoSelect").append("<option value=" + tre[i] +">" + tre[i] + "</option>");
                }
        break;
        case "Business Administration A.A":
        case "Business A.S":
        case "Business Administration (BSTAA) A.A":
            const ba = ["B.S in Business Administration (BSBA)"];
                for ( let i = 0; i < ba.length; i++ ) {
                    $("#unoSelect").append("<option value=" + ba[i] +">" + ba[i] + "</option>");
                }
        break;
        case "Biology A.S":
        case "Biology focus L.A.T.A.S":
            const bio = ["B.S in Biology"];
                for ( let i = 0; i < bio.length; i++ ) {
                    $("#unoSelect").append("<option value=" + bio[i] +">" + bio[i] + "</option>");
                }
        break;
        case "Sociology focus A.A.L.A":
        case "Sociology focus L.A.T.A.A":
            const soc = ["B.A in Sociology "];
                for ( let i = 0; i < soc.length; i++ ) {
                    $("#unoSelect").append("<option value=" + soc[i] +">" + soc[i] + "</option>");
                }
        break;
        case "Aviation focus L.A.T.A.S":
            const avi = ["B.S in Aviation "];
                for ( let i = 0; i < avi.length; i++ ) {
                    $("#unoSelect").append("<option value=" + avi[i] +">" + avi[i] + "</option>");
                }
        break;
        case "Fire Science Technology F.S.A.A.S":
        case "Fire Service Management L.A.T.A.A":
            const fire= ["B.S. in Emergency Management, Concentration in Fire Service Management"];
                for ( let i = 0; i < fire.length; i++ ) {
                    $("#unoSelect").append("<option value=" + fire[i] +">" + fire[i] + "</option>");
                }
        break;
        case "Chemistry focus L.A.T.A.S":
            const chem = ["B.S. in Chemistry"];
                for ( let i = 0; i < chem.length; i++ ) {
                    $("#unoSelect").append("<option value=" + chem[i] +">" + chem[i] + "</option>");
                }
        break;
        case "Communication Studies focus L.A.T.A.A":
            const comm = ["B.A. in Communication Studies, Minor in Journalism and Media Communication"];
                for ( let i = 0; i < comm.length; i++ ) {
                    $("#unoSelect").append("<option value=" + comm[i] +">" + comm[i] + "</option>");
                }
        break;
        case "Computer Science (CTSAS) A.S":
        case "Computer Engineering focus A.S":
            const comsci = ["B.S. in Computer Science"];
                for ( let i = 0; i < comsci.length; i++ ) {
                    $("#unoSelect").append("<option value=" + comsci[i] +">" + comsci[i] + "</option>");
                }
        break;
        case "Education - Elementary Education focus (STEM Concentration) L.A.T.A.A":
            const ee = ["B.S. in Education - Elementary Education"];
                for ( let i = 0; i < ee.length; i++ ) {
                    $("#unoSelect").append("<option value=" + ee[i] +">" + ee[i] + "</option>");
                }
        break;
        case "Education - Secondary Education focus (Biology Endorsement) L.A.T.A.S":
            const sess = ["B.S. in Education - Secondary Education (Social Science Endorsement)"];
                for ( let i = 0; i < sess.length; i++ ) {
                    $("#unoSelect").append("<option value=" + sess[i] +">" + sess[i] + "</option>");
                }
        break;
        case "Education - Secondary Education focus (Biology Endorsement) L.A.T.A.S":
            const sech = ["B.S. in Education - Secondary Education (Chemistry Endorsement)"];
                for ( let i = 0; i < sess.length; i++ ) {
                    $("#unoSelect").append("<option value=" + sess[i] +">" + sess[i] + "</option>");
                }
        break;
        case "Education - Secondary Education focus (English Language Arts Endorsement) L.A.T.A.A":
            const sela = ["B.S. in Education - Secondary Education (English Language Arts Endorsement)"];
                for ( let i = 0; i < sela.length; i++ ) {
                    $("#unoSelect").append("<option value=" + sela[i] +">" + sela[i] + "</option>");
                }
        break;
        case "Education - Secondary Education focus (Mathematics Endorsement) L.A.T.A.S":
            const sem = ["B.S. in Education - Secondary Education (Mathematics Endorsement)"];
                for ( let i = 0; i < sem.length; i++ ) {
                    $("#unoSelect").append("<option value=" + sem[i] +">" + sem[i] + "</option>");
                }
        break;
        case "Education - Secondary Education focus (Science Endorsement) L.A.T.A.S":
            const ses = ["B.S. in Education - Secondary Education (Science Endorsement)"];
                for ( let i = 0; i < ses.length; i++ ) {
                    $("#unoSelect").append("<option value=" + ses[i] +">" + ses[i] + "</option>");
                }
        break;
        case "Education - Secondary Education focus (Social Science Endorsement) L.A.T.A.A":
            const seso = ["B.S. in Education - Secondary Education (Social Science Endorsement)"];
                for ( let i = 0; i < seso.length; i++ ) {
                    $("#unoSelect").append("<option value=" + seso[i] +">" + seso[i] + "</option>");
                }
        break;
        case "English (American Literature, British/Irish/Anglophone Literature, Language Studies Concentrations) L.A.T.A.A":
        case "English (American Literature, British/Irish/Anglophone Literature, Language Studies Concentrations) L.A.T.A.A":
            const eng = ["B.A. in English"];
                for ( let i = 0; i < eng.length; i++ ) {
                    $("#unoSelect").append("<option value=" + eng[i] +">" + eng[i] + "</option>");
                }
        break;
        case "Enviromental Engineering focus L.A.T.A.S":
            const ene = ["B.S. in Environmental Engineering"];
                for ( let i = 0; i < ene.length; i++ ) {
                    $("#unoSelect").append("<option value=" + ene[i] +">" + ene[i] + "</option>");
                }
        break;
        case "Mathematics focus L.A.T.A.S":
            const math = ["B.S. in Mathematics"];
                for ( let i = 0; i < math.length; i++ ) {
                    $("#unoSelect").append("<option value=" + math[i] +">" + math[i] + "</option>");
                }
        break;
        case "Managment Information Systems (CTMAS) A.S":
            const mis = ["B.S. in Management Information Systems (BIS)"];
                for ( let i = 0; i < mis.length; i++ ) {
                    $("#unoSelect").append("<option value=" + mis[i] +">" + mis[i] + "</option>");
                }
        break;
        case "Physics focus L.A.T.A.S":
            const phy = ["B.S. in Physics"];
                for ( let i = 0; i < phy.length; i++ ) {
                    $("#unoSelect").append("<option value=" + phy[i] +">" + phy[i] + "</option>");
                }
        break;
        case "Political Science focus L.A.T.A.A":
            const poli = ["B.S. in Political Science"];
                for ( let i = 0; i < poli.length; i++ ) {
                    $("#unoSelect").append("<option value=" + poli[i] +">" + poli[i] + "</option>");
                }
        break;
        case "Psycology focus L.A.T.A.A":
            const psy = ["B.A. in Psychology"];
                for ( let i = 0; i < psy.length; i++ ) {
                    $("#unoSelect").append("<option value=" + psy[i] +">" + psi[i] + "</option>");
                }
        break;
        case "Public Health focus L.A.T.A.A":
            const publ = [" B.S. in Public Health"];
                for ( let i = 0; i < publ.length; i++ ) {
                    $("#unoSelect").append("<option value=" + publ[i] +">" + publ[i] + "</option>");
                }
        break;
        case "Studio Art (2-D Arts) ARTAA":
            const td = ["B.A. in Studio Art, concentration in 2-D Arts"];
                for ( let i = 0; i < td.length; i++ ) {
                    $("#unoSelect").append("<option value=" + td[i] +">" + td[i] + "</option>");
                }
        break;
        case "Studio Art (3-D Arts) ARTAA":
            const thd = ["B.A. in Studio Art, concentration in 3-D Arts"];
                for ( let i = 0; i < thd.length; i++ ) {
                    $("#unoSelect").append("<option value=" + thd[i] +">" + thd[i] + "</option>");
                }
        break;
        case "Studio Art (Graphic Design) ARTAA":
        case "Graphic Design A.A":
            const ga = ["B.A. in Studio Art, concentration in Graphic Designs"];
                for ( let i = 0; i < ga.length; i++ ) {
                    $("#unoSelect").append("<option value=" + ga[i] +">" + ga[i] + "</option>");
                }
        break;
        case "Studio Art (Media Art) ARTAA":
            const med = ["B.A. in Studio Art, concentration in Media Arts"];
                for ( let i = 0; i < med.length; i++ ) {
                    $("#unoSelect").append("<option value=" + med[i] +">" + med[i] + "</option>");
                }
        break;
        case "Studio Art (Studio Art with K-12 Cert) ARTAA":
            const k = ["B.A. in Studio Art, concentration in Studio Art with K-12 Certification concentration"];
                for ( let i = 0; i < k.length; i++ ) {
                    $("#unoSelect").append("<option value=" + k[i] +">" + k[i] + "</option>");
                }
        break;
        case "Social Work (Human Services Transfer) HSTAA":
        case  "Social Work A.A":
            const hst = ["B.S. in Social Work"];
                for ( let i = 0; i < hst.length; i++ ) {
                    $("#unoSelect").append("<option value=" + hst[i] +">" + hst[i] + "</option>");
                }
        break;
        default:
            document.getElementById("ex").innerHTML = "You selected noting";
        } 
}

function change(){
    window.open('https://www.unomaha.edu/registrar/students/before-you-enroll/transfer-credit/guided-pathways/ccc/ccc-arch.eng.php', '_blank');
}
                

