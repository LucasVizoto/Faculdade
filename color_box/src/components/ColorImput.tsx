export function ColorInput({ color, setColor }: { color: string, setColor: (value: string) => void }) {
//componente funcional pode receber props e posso dizer o tipo dessas props
// aqui pode-se ver que é possivel passar uma função tbm
// set colo foi tipado como string retornando void
    return (

        <div>
            <label htmlFor='colorInput'>Digite uma cor ou código hexadecimal: </label>
            <input
                type='text'
                id='colorInput'
                value={color}
                onChange={(e) => setColor(e.target.value)}
 // quando o valor do input muda, a função setColor será chamada passando o novo valor
 // onchange é "quanod muda"
            />
        </div>

    );
}