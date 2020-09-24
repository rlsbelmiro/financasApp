import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage() {
            const storage = await AsyncStorage.getItem('Auth_user');

            if (storage) {
                setUser(JSON.parse(storage));
            }

            setLoading(false);
        }

        loadStorage();
    }, [])

    async function signUp(email, senha, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome
                }).then(() => {
                    let data = {
                        uid: uid,
                        nome: nome,
                        email: value.user.email
                    };
                    setUser(data);
                    storageUser(data);
                });

            });
    }

    async function signIn(email, senha) {
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                let email = value.user.email;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((obj) => {
                        let data = {
                            uid: uid,
                            nome: obj.val().nome,
                            email: email
                        };
                        setUser(data);
                        storageUser(data);
                    });
            })
            .catch((error) => {
                alert(error.code);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;