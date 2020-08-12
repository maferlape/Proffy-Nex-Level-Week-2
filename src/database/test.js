const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db)=>{
    //Ingresar datos

    proffyValue = {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"98271373197129", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
      
    }

    classValue = {
        subject:"1",
        cost:"20",
       //o proffy id viene por el banco de datos
    }

    classScheduleValues = [

        //class_id vendra por el banco de datos despues de registrarse en la clase
        {
            weekday:0, 
            time_from:720, 
            time_to:1220
        },
        {
            weekday:0, 
            time_from:520, 
            time_to:1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar los datos ingresados
    //todos los proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar los datos de un determinado profesor
    //y traer junto lod datos del profesor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //el horario quela persona trabaja, por ejemplo, es de 8h - 18h
    //el horario de time_from (8h) precisa ser menor o igual al horario solicitado
    //el time_to tiene que ser mayor
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday= "0"
        AND class_schedule.time_from <="1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})