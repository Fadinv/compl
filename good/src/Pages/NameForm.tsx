import React, {useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';

export const NameForm: React.FC<RouteComponentProps> = () => {
	// const [saveUser, {data, loading, error}] = useMutation(USER_MUTATION);
	const [userName, setUserName] = useState<string>('');

	// if (loading) return <>loading...</>;
	// if (error) return <>error...</>;

	return (
		<div>
			<input onChange={(v) => setUserName(v.target.value)} value={userName} type="text"/>
			<button onClick={() => null}>Сохранить</button>
		</div>
	);
};
