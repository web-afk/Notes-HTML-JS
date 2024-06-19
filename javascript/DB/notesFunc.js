export const notesFunc = (id, title, content, dateCreated, dateUpdated, dateFinished, autoFinished, autoDeleted, deleted, finished, completed, status) => {
    return {
        id,
        title,
        content,
        dateCreated,
        dateUpdated,
        dateFinished,
        autoFinished,
        autoDeleted,
        deleted,
        finished,
        completed,
        status
    }
}

export const getID = (notesData) => notesData.at(-1)?.id ? notesData.at(-1).id + 1 : 1