class Soluciones {

    constructor(num) {
        switch (num) {
            case 1:
                this.soluciones = this.cargarSoluciones1();
                break;
            case 2:
                this.soluciones = this.cargarSoluciones2();
                break;
            case 3:
                this.soluciones = this.cargarSoluciones3();
                break;
            case 4:
                this.soluciones = this.cargarSoluciones4();
                break;
        }
    }

    getArray() {
        return this.soluciones;
    }

    cargarSoluciones1() {
        var ret = new Array();

        ret.push("b"); //1
        ret.push("a");
        ret.push("a");
        ret.push("d");
        ret.push("a");

        ret.push("a"); //6
        ret.push("b");
        ret.push("b");
        ret.push("b");
        ret.push("c");

        ret.push("b"); //11
        ret.push("c");
        ret.push("e");
        ret.push("b");
        ret.push("c");

        ret.push("b"); //16
        ret.push("a");
        ret.push("d");
        ret.push("d");
        ret.push("e");

        ret.push("b"); //21
        ret.push("b");
        ret.push("d");
        ret.push("a");
        ret.push("b");

        ret.push("a"); //26
        ret.push("c");
        ret.push("b");
        ret.push("e");
        ret.push("c");

        return ret;
    }

    cargarSoluciones2() {
        var ret = new Array();

        ret.push("d"); //1
        ret.push("a");
        ret.push("a");
        ret.push("a");
        ret.push("a");

        ret.push("a"); //6
        ret.push("c");
        ret.push("d");
        ret.push("b");
        ret.push("a");

        ret.push("d"); //11
        ret.push("e");
        ret.push("c");
        ret.push("b");
        ret.push("e");

        ret.push("e"); //16
        ret.push("b");
        ret.push("a");
        ret.push("a");
        ret.push("b");

        ret.push("d"); //21
        ret.push("c");
        ret.push("a");
        ret.push("d");
        ret.push("d");

        ret.push("a"); //26
        ret.push("a");
        ret.push("a");
        ret.push("a");
        ret.push("a");

        return ret;
    }

    cargarSoluciones3() {
        var ret = new Array();

        ret.push("e"); //1
        ret.push("a");
        ret.push("e");
        ret.push("a");
        ret.push("c");

        ret.push("a"); //6
        ret.push("d");
        ret.push("d");
        ret.push("d");
        ret.push("d");

        ret.push("c"); //11
        ret.push("c");
        ret.push("b");
        ret.push("d");
        ret.push("a");

        ret.push("d"); //16
        ret.push("a");
        ret.push("c");
        ret.push("a");
        ret.push("b");

        ret.push("a"); //21
        ret.push("d");
        ret.push("a");
        ret.push("c");
        ret.push("a");

        ret.push("e"); //26
        ret.push("c");
        ret.push("d");
        ret.push("a");
        ret.push("c");

        ret.push("d"); //31
        ret.push("b");
        ret.push("e");
        ret.push("b");
        ret.push("a");

        ret.push("d"); //36
        ret.push("a");
        ret.push("d");
        ret.push("a");
        ret.push("d");

        ret.push("b"); //41
        ret.push("d");
        ret.push("d");
        ret.push("a");
        ret.push("d");

        ret.push("b"); //46
        ret.push("d");
        ret.push("e");
        ret.push("a");
        ret.push("c");

        ret.push("a"); //51
        ret.push("d");
        ret.push("c");
        ret.push("c");
        ret.push("a");

        ret.push("d"); //56
        ret.push("b");
        ret.push("d");
        ret.push("a");
        ret.push("d");

        return ret;
    }


    cargarSoluciones4() {
        var ret = new Array();

        ret.push("a"); //1
        ret.push("a");
        ret.push("a");
        ret.push("b");
        ret.push("d");

        ret.push("c"); //6
        ret.push("d");
        ret.push("a");
        ret.push("d");
        ret.push("d");

        ret.push("c"); //11
        ret.push("a");
        ret.push("a");
        ret.push("c");
        ret.push("b");

        ret.push("a"); //16
        ret.push("a");
        ret.push("a");
        ret.push("d");
        ret.push("d");

        ret.push("a"); //21
        ret.push("d");
        ret.push("d");
        ret.push("d");
        ret.push("a");

        ret.push("b"); //26
        ret.push("d");
        ret.push("a");
        ret.push("a");
        ret.push("c");

        ret.push("d"); //31
        ret.push("a");
        ret.push("d");
        ret.push("c");

        return ret;
    }
}