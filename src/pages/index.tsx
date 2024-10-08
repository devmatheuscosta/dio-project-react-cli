import { useMemo, useCallback, useState, useRef, useEffect } from 'react';

export const Teste = () => {
	// 1. Defino o estado inicial do nome e do contador
	const [name, setName] = useState('Matheus');
	const [count, setCount] = useState(0);

	// 2. Crio um ref para o input
	const inputRef = useRef<HTMLInputElement>(null);

	// 3. Crio uma função de callback para quando o botão for clicado
	//    Essa função vai incrementar o contador
	const handleClick = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	// 4. Crio uma função de callback que vai ser usada para transformar
	//    o nome em uma string com o padrão "Olá, Matheus"
	const getFullName = useMemo(() => {
		return `Olá, ${name}`;
	}, [name]);

	// 5. Crio um efeito colateral para quando o componente for montado
	//    Esse efeito colateral vai focar no input
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	// 6. Crio uma função de callback para quando o valor do input mudar
	//    Essa função vai atualizar o estado do nome
	const handleNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
		},
		[]
	);

	// 7. Renderizo o componente
	return (
		<div>
			<h1>{getFullName}</h1>
			<p>Você clicou {count} vezes</p>
			<input
				ref={inputRef}
				type="text"
				value={name}
				onChange={handleNameChange}
			/>
			<button onClick={handleClick}>Clique aqui para incrementar</button>
		</div>
	);
};
