export function WidthInput({ color: width, setColor: setWidth }: { color: string, setColor: (value: string) => void }) {
//componente funcional pode receber props e posso dizer o tipo dessas props
// aqui pode-se ver que é possivel passar uma função tbm
// set colo foi tipado como string retornando void
    return (

        <div>
            <label htmlFor='widthInput'>Digite uma largura para o botão: </label>
            <input
                type='text'
                id='widthInput'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
 // quando o valor do input muda, a função setColor será chamada passando o novo valor
 // onchange é "quanod muda"
            />
        </div>

    );
}