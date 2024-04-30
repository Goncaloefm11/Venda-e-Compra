/**
 * Login user
 * @param {string} username Name to try to login with
 * @param {string} password Password to try to login with
 * @param {Phaser.Scene} scene scope in with the login is being made
 */


export function login(username, password,scene) {
    $.ajax
    ({
        type: "POST",
        url: "https://www.hypatiamat.com/loginActionVH.php",
        data: "action=dologin&u=" + username + "&p=" + password,
        crossDomain: true,
        cache: false,

        success: function (response) {
            if (response!="false") {
                infoUser.user = response.split(",")[0];    								  // username
				if  (infoUser.user!="prof") {                         
					infoUser.firstName = response.split(",")[1];                          // primeiro nome do aluno
					infoUser.escola = response.split(",")[2];                             // codigo da escola
					infoUser.turma = response.split(",")[3];
					infoUser.setLocalData();
					scene.ola.visible = true;
					scene.play.setInteractive();
					scene.btinfo.setInteractive();
					scene.btcreditos.setInteractive();
					scene.logout.setInteractive();
					scene.scene.transition({ target: 'InitialPage', duration: 100 });
					devolveDados();
				} else {
					 // alert("Registado como professor");
					scene.loginErrorMsg2.visible = true;
              		return -1;
				}
            }
            else {
                // alert("Utilizador ou Password Errados");
                scene.loginErrorMsg.visible = true;
                return -1;
            }


        },
        error: function (response) {
            infoUser.user = "";
            alert("Falha de ligação, por favor verifique a sua conexão")
        }
    })
};



/**
 * Check if there is an active session
 */
function sessionVerify() {  
    $.ajax
    ({
	type: "POST",
	url: "https://www.hypatiamat.com/loginActionVH.php",
	data: "action=verify",
	cache: false,
        success: function (response) {
            if (response != "not") {
				infoUser.user = response.split(",")[0];  
				if  (infoUser.user!="prof") {                         
					infoUser.firstName = response.split(",")[1];                          // primeiro nome do aluno
					infoUser.escola = response.split(",")[2];                             // codigo da escola
					infoUser.turma = response.split(",")[3];
					infoUser.setLocalData();
					//scene.ola.visible = true;
					//scene.play.setInteractive();
					//scene.btinfo.setInteractive();
					//scene.btcreditos.setInteractive();
					//scene.logout.setInteractive();
					//scene.scene.transition({ target: 'InitialPage', duration: 100 });
					devolveDados();
				} else {
					infoUser.user = "";
               		return;
				}
	    	}	
            else {
                infoUser.user = "";
                return;
	    	}
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            infoUser.user = "";
            alert("Falha de ligação, por favor verifique a sua conexão")
	}
    })
}

function destroySession() {
    $.ajax
    ({
        type: "POST",
        url: "https://www.hypatiamat.com/loginActionVH.php",
        data: "action=des",
        cache: false,
        success: function (response) {
            infoUser.logout();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            infoUser.user = "";
            alert("Falha de ligação, por favor verifique a sua conexão")
        }
    })
}

function devolveDados() {
	var a1;
	var a2;
	var a3;
    //console.log("->" + infoUser.user);
	if (infoUser.user != "") {
		$.ajax
		({
		type:"POST",
		url:"https://www.hypatiamat.com/appsinfophp.php",
		data: "action=devolveD&user=" + infoUser.user + "&gr=" + 907 + "&app=" + 9070,
		cache: false,
		success:function(response) {
            if (response != " "){
			    console.log("RES: " + response);
			    a1 = response.split("erro=")[1].split("&")[0];
				if (a1 == 0) {
			    	a2 = response.split("dbc=")[1].split("&")[0];
			   	 	a3 = response.split("dbt=")[1].split("&")[0];
				}
            }
            else {
                a1=0;
                a2=0;
                a3=0;
            }
			
			if (a1 ==  0) {
				globalScore = Number(a2);
				globalTotal = Number(a3);
				percentagem = Math.round(100*(globalScore/globalTotal))+"%";
			} else {
				globalScore = 0;
				globalTotal = 0;
				percentagem ="0%";
			}
			  //console.log("devolve www: " + a1 + "  ;   " + a2 + "  ;   " + a3);
			}, error: function(XMLHttpRequest, textStatus, errorThrown) {
			  //console.log("load_data error: " + errorThrown);
			}
		});
		return false;
	}
	
}

function saveScore(sc, f) {
	var freQtmp;

	if (Number(globalFreq) == 0) {
		freQtmp = 1;
		globalFreq = 1;
	} else {
		freQtmp = 0
	}

	if (sc == "+") {
		globalScore = globalScore + 1;
		globalTotal++;
		saveDados(freQtmp, 1, 1, String(globalProblems)); 
		if (infoUser.user  != "") {
			saveDadosTask(f, 1, 1);
			//saveTrophys(1);
		}
	} else {
		globalTotal++;
		saveDados(freQtmp, 0, 1, String(globalProblems)); 
		if (infoUser.user  != "") {
			saveDadosTask(f, 0, 1);
			//saveTrophys(0);
		}
	}
}

function saveDados(fr, ncc, ntt, nprobl) {
	if (infoUser.user != "") {;
		percentagem = Math.round(100*(globalScore/globalTotal))+"%";
		$.ajax
		({
		type:"POST",
		url:"https://www.hypatiamat.com/appsinfophp.php",
		data: "action=insere&user=" + infoUser.user  + "&gr=" + 907 + "&app=" + 9070 + "&freq=" + fr + "&nc=" + ncc + "&nt=" + ntt + "&probl=" + nprobl,
		cache: false,
		success:function(response) {
			  //console.log("www: " + response);
			}, error: function(XMLHttpRequest, textStatus, errorThrown) {
			  //console.log("load_data error: " + errorThrown);
			}
		});
		return false;
	}
}

function saveDadosTask(fr, ncc, ntt) {
	if (infoUser.user != "") {
		$.ajax
		({
		type:"POST",
		url:"https://www.hypatiamat.com/appsinfophp.php",
		data: "action=insereT&user=" + infoUser.user + "&gr=" + 907 + "&app=" + 9070 + "&fr=" + fr + "&nc=" + ncc + "&nt=" + ntt + "&tableDB=tarefascompraevenda",
		cache: false,
		success:function(response) {
			  //console.log("www: " + response);
			}, error: function(XMLHttpRequest, textStatus, errorThrown) {
			  //console.log("load_data error: " + errorThrown);
			}
		});
		return false;
	}
}