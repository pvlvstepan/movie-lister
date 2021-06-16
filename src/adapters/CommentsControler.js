import { Button } from '@chakra-ui/react';
import React from 'react';

const CommentsControler = () => {

    var database;

    var request = window.indexedDB.open("movieComments", 1);

    request.onerror = (e) => {

        console.log(e.target.errorCode);

    };

    request.onsuccess = (e) => {

        database = request.result;

    };

    request.onupgradeneeded = (e) => {

        var db = e.target.result;

        var objectStore = db.createObjectStore("comments", { keyPath: "id", autoIncrement: true });

    };

    const createComment = () => {
        var note = { title: 'Test Comment', body: 'Hello World!', date: '01/04/2013' };

        var transaction = database.transaction(["comments"], "readwrite");

        var objectStore = transaction.objectStore("comments");

        var request = objectStore.put(note);

        request.onsuccess = (e) => {

            //do something here

        };
    };

    const deleteComment = () => {
        var request = database.transaction(["comments"], "readwrite").objectStore("comments").delete(20);

        request.onsuccess = (e) => {

            //handle success

        };
    };

    const queryComments = () => {
        var objectStore = database.transaction("comments").objectStore("comments");

        objectStore.openCursor().onsuccess = (e) => {

            var cursor = e.target.result;

            if (cursor) {

                alert("Comment ID: " + cursor.key + ", Title: " + cursor.value.title);

                cursor.continue();

            }

        };
    };

    return (
        <div>
            <Button onClick={createComment}>Create Note</Button>
            <Button onClick={queryComments}>Show Comments</Button>
        </div>
    );
};

export default CommentsControler;
