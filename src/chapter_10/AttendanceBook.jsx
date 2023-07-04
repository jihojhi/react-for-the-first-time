import React from "react";

const students = [
    {
        id:1,
        name: "Hyojin",
    },
    {
        id:2,
        name: "Haerin",
    },
    {
        id:3,
        name: "Hyein",
    },
    {
        id:4,
        name: "Minji",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                // return <li key={student.id}>{student.name}</li>
                // return <li key={`student-id-${student.id}`}>{student.name}</li> // 포맷팅 된 문자열 사용
                return <li key={index}>{student.name}</li> // index 사용
            })}
        </ul>
    );
}

export default AttendanceBook;