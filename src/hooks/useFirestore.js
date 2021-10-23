import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy("createdAt", "desc") // sorted order
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					// cycles though documents in the database collection at that moment in time
					documents.push({ ...doc.data(), id: doc.id }); // gets data inside document
				});
				setDocs(documents);
			});
		return () => unsub(); // unsubs from collection when not in use
	}, [collection]);

	return { docs };
};
export default useFirestore;
