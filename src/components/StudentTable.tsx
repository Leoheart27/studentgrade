import {Student} from "@/types/Student"

type Props = {
    students : Student[]
}

export const StudentTable = ({students}: Props): JSX.Element => {

    const avatar = (student: Student): JSX.Element => <img className="w-10 rounded-full" src={student.avatar} alt={student.name} />
    const active: JSX.Element = <p className="bg-green-900 max-w-fit p-1 rounded-md border-solid border-2 border-black">Active</p>
    const inactive: JSX.Element = <p className="bg-red-900 max-w-fit p-1 rounded-md border-solid border-2 border-black">Inactive</p>
    const finalGrade = (student: Student): string => (student.grade1 + student.grade2).toFixed(0)

    return (
        <table className="max-h-28 w-full text-left m-4">
            <thead className="bg-slate-800 border-solid border">
                <tr>
                    <th className="p-2">Name</th>
                    <th>Status</th>
                    <th>Grade 1</th>
                    <th>Grade 2</th>
                    <th>Final Grade</th>
                </tr>
            </thead>
            <tbody className="border-solid border">
                {students.map((student) => (
                    <tr key={student.id} className="border-solid border border-slate-400 bg-slate-700">
                        <td className="flex gap-4 p-2">{avatar(student)} {student.name} <br /> {student.email}</td>
                        <td className="text-sm">{student.active ? active : inactive}</td>
                        <td>{student.grade1}</td>
                        <td>{student.grade2}</td>
                        <td>{student.active ? finalGrade(student) : '--'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} 