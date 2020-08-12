const subjects=[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
    ]
    
    
const weekdays =[
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado"
]

function getSubject(subjectNumber){
    const position = +subjectNumber-1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const[hour,minutes] = time.split(":")//split convierte el time en un vector de dos posiciones
    return Number((hour*60)+minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}