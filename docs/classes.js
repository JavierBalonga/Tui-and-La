// Clase Environment, donde se renderizan los modelos
class Environment {
    constructor(id){
        this.element = document.getElementById(id);
        this.models = [];
    }
    render(){
        this.element.innerHTML = "";
        for (let i = 0; i < this.models.length; i++){
            let modelElements = this.models[i].render();
            for (let j = 0; j < modelElements.length; j++){
                this.element.appendChild(modelElements[j])
            }
        }
    }
}
// Clase Model, con el vamos a poder construir modelos como animales, etc
class Model {
    constructor(environment) {
        this.body = {};
        environment.models.push(this);
        this.velocity = 5;
    }
    // Metodo que me va a permitir agregarle partes al body
    addBodyPart(name, part, type, attributes){
        this.body[name] = new Path(part, type, attributes);
    }
    // Metodo render que me va a permitir renderizar el modelo
    render() {
        let ret = []
        for (let part in this.body) {
            ret.push(document.createComment(part));
            ret.push(this.body[part].buildElement());
        }
        return ret;
    }
    // Metodo para ejecutar un callback en todos los puntos del Animal
    forEachPoint(cb) {
        let ret = []
        for (let part in this.body) {
            this.body[part].d.forEach(function(segment){
                for (let point in segment) {
                    if (segment[point] instanceof Point) {
                        ret.push(cb(segment[point]))
                    }
                }
            })
        }
        return ret
    }
    // Metodo para crear un esqueleto facil
    easySkeleton() {
        // Obtengo todos los puntos del modelo
        let points = this.forEachPoint(function(point){return point;});
        // Los ordeno por su coordendada y
        points.sort(function(a,b){return a.yo - b.yo;});
        // Creo un nuevo esqueleto
        this.skeleton = new Skeleton();
        // creo un cursor para recorrerlo
        let cursor = this.skeleton
        // Mientras siga teniendo puntos
        while(cursor) {
            // Mientras exista un punto por agregar al esqueleto
            // Y la cordenada y de dicho punto es igual al del hueso actual
            while(points.length && cursor.y === points[0].yo) {
                // lo paso a los puntos del hueso actual
                cursor.points.push(points.shift())
            }
            // si todavia hay puntos, y me tope con uno de una coordenada y distinta
            if (points.length){
                // Creo un nuevo hueso en el siguiente
                this.skeleton.addBone(0, points[0].yo)
            }
            // y me muevo al siguiente hueso
            cursor = cursor.next;
        }
        return this.skeleton
    }
    move(x, y){
        let d = Math.sqrt((this.skeleton.next.x-x)**2 + (this.skeleton.next.y-y)**2)
        if (d > this.velocity){
            x = this.skeleton.next.x + (x - this.skeleton.next.x) / d * this.velocity;
            y = this.skeleton.next.y + (y - this.skeleton.next.y) / d * this.velocity;
        }
        this.skeleton.move(x, y)
    }
}
// Clase Path, las partes del body se componene de paths de svg esta clase ayuda a operarlas
class Path {
    constructor(str,type,attributes) {
        this.d = [];
        this.createFromString(str);
        this.type = type
        if (!attributes) {
            this.attributes = {};
            this.attribute("stroke", "black")
            this.attribute("fill", "white")
            this.attribute("stroke-width", "0.7")
        } else {
            this.attributes = attributes;
        }
    }
    // Metodo para construir el path desde un string
    createFromString(str) {
        let segments = str.split(/[\s\S](?=[A-Z]|[a-z])/g);
        for (let i = 0; i < segments.length; i++) {
            if (segments[i][0] == "M") {
                segments[i] = segments[i].slice(1);
                let point = segments[i].split(/\,?\s+/g);
                this.d[0] = new M(point[0], point[1]);
            } else if (segments[i][0] == "C") {
                segments[i] = segments[i].slice(1);
                let points = segments[i].split(/\,?\s+/g);
                this.d.push(new C(points[0], points[1], points[2], points[3], points[4], points[5]));
            }
        }
    }
    // Metodo que me permite agregar o setear atributos
    attribute(attr, value) {
        return this.attributes[attr] = value;
    }
    // Metodo que me va a permitir renderizar el path
    buildElement() {
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let d = "";
        this.d.forEach(function (segment) { d += " " + segment.print(); });
        path.setAttribute("d", d.slice(1));
        for (let attr in this.attributes) {
            path.setAttribute(attr, this.attributes[attr]);
        }
        return path;
    }
    getPoints(){
        if (this.type === "soft") {

        } else if (this.type === "rigid") {

        }
    }
}
// los path de svg se componene de distintos segmentos yo voy a usar M y C
// Clase M este segmento lo unico que hace es mover el cursor a un x,y
class M {
    constructor(initX, initY) {
        this.point = new Point(initX, initY);
    }
    // Metodo print que me va a devolver M como un string
    print() {
        return "M" + this.point.str();
    }
}
// Clase C este segmento funciona como un spline de 3 puntos
class C {
    constructor(X1, Y1, X2, Y2, X3, Y3) {
        this[0] = new Point(X1, Y1);
        this[1] = new Point(X2, Y2);
        this[2] = new Point(X3, Y3);
    }
    // Metodo print que me va a devolver C como un string
    print() {
        return "C" + this[0].str() + " " + this[1].str() + " " + this[2].str();
    }
}
// Clase Point, los segmentos M,C de un path se componene por puntos
class Point {
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
        this.xo = Number(x);
        this.yo = Number(y);
    }
    // Metodo que permite devolverlo como un string
    str(){
        return this.x + "," + this.y;
    }
}
// Clase skeleton, encargada de comandar el body
class Skeleton {
    constructor(){
        this.next = null;
    }
    addBone(x, y) {
        if (!this.next) return this.next = new Bone(x, y, 0);
        let cursor = this.next;
        while (cursor.next) {
            cursor = cursor.next;
        }
        let length = Math.sqrt((cursor.x - x)**2 + (cursor.y - y)**2)
        return cursor.next = new Bone(x, y, length);
    }
    move(tx, ty){
        var alpha
        if (this.next) this.next.forEachBone(function(bone){
            bone.x = tx;
            bone.y = ty;
            if (bone.next) {
                if (tx > bone.next.x) {
                    alpha = Math.atan((ty - bone.next.y) / (tx - bone.next.x));
                } else {
                    alpha = Math.atan((ty - bone.next.y) / (tx - bone.next.x)) + Math.PI;
                }
                tx = tx - bone.length * Math.cos(alpha);
                ty = ty - bone.length * Math.sin(alpha);
            }
            bone.points.forEach(function(p){
                let dx = p.xo * Math.sin(alpha) //+ (p.yo - bone.y) * Math.cos(alpha);
                let dy = -p.xo * Math.cos(alpha) //+  (p.yo - bone.y) * Math.sin(alpha);
                p.x = tx + dx;
                p.y = ty + dy;
            })
        })
    }
}
// Clase Bone, son los nodos de los que se compone un skeleton
class Bone {
    constructor(x, y, length){
        this.x = x;
        this.y = y;
        this.length = length;
        this.points = [];
        this.next = null;
    }
    forEachBone(cb){
        cb(this);
        if (this.next) this.next.forEachBone(cb);
    }
}
