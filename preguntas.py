def escape(html):
    return html.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;').replace("'", '&#39;')


def ciclo(numpregunta):
    print("\nPregunta " + str(numpregunta) + ".")
    grupo = "g3"
    pregunta = "s" + str(numpregunta)

    tit = str(numpregunta) + ". " + escape(input("titulo: "))
    op1 = "a. " + escape(input("opcion 1: "))
    op2 = "b. " + escape(input("opcion 2: "))
    op3 = "c. " + escape(input("opcion 3: "))
    op4 = escape(input("opcion 4: "))
    op5 = escape(input("opcion 5: "))

    if op4 == "tc":
        op4 = "Todas son correctas"
        
    if op5 == "ti":
        op5 = "Todas son incorrectas"

    op4 = "d. " + op4
    op5 = "e. " + op5

    idPregunta = grupo + pregunta
    idResp1 = idPregunta + "o1"
    idResp2 = idPregunta + "o2"
    idResp3 = idPregunta + "o3"
    idResp4 = idPregunta + "o4"
    idResp5 = idPregunta + "o5"


    string = f"""
    <div id="{idPregunta}" class="pregunta">
                        <p>{tit}</p>
                        <div>
                            <input type="radio" name="{idPregunta}" id="{idResp1}" value="a">
                            <label for="{idResp1}">
                                {op1}
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="{idPregunta}" id="{idResp2}" value="b">
                            <label for="{idResp2}">
                                {op2}
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="{idPregunta}" id="{idResp3}" value="c">
                            <label for="{idResp3}">
                                {op3}
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="{idPregunta}" id="{idResp4}" value="d">
                            <label for="{idResp4}">
                                {op4}
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="{idPregunta}" id="{idResp5}" value="e">
                            <label for="{idResp5}">
                                {op5}
                            </label>
                        </div>
                    </div>
    """

    divs.append(string)
    print("\n\n\n")

divs = []
numpreg = int(input("Numero de pregunta: "))
while(True):
    ciclo(numpreg)
    numpreg = numpreg + 1
    for string in divs:
        print(string)
