module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    //ingresar datos en la tabla proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //ingresar datos en la tabla classes
    const insertedClass = await db.run(`
            INSERT INTO classes(
                subject,
                cost,
                proffy_id
            )VALUES(
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    class_id = insertedClass.lastID

    //ingresar datos en la tabla class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) =>{
        return db.run(`
            INSERT INTO class_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            )VALUES(
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //aqui se va a ejecutar todos los db.runs() de las clases class_schedule
    await Promise.all(insertedAllClassScheduleValues)
}