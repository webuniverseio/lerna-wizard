(async function () {
    try {
        await require('../')({
            commandMessage: 'What do you want to do?',
            commandChoiceFilter({value}) {
                return value;//!['ls', 'updated'].includes(value);
            }
        });
    } catch (ex) {
        console.error(ex);
        process.exit(1);
    }
}());