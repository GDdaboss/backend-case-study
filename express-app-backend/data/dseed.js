const { execSync } = require( 'child_process' );

// drop the database and add seed data
// Reference: https://stackoverflow.com/questions/8857276/how-do-i-drop-a-mongodb-database-from-the-command-line
try {
    execSync( 'mongo meetingapp --eval "db.dropDatabase()"' );
    console.log( 'dropped database meetings-app' );
} catch( err ) {
    console.log( 'some problems encountered when trying to drop database meetings-app' );
    console.error( err );
}