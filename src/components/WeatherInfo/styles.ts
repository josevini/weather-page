import styled from 'styled-components'

export const Container = styled.main`
    width: 400px;
    height: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 35px;
    color: #fff;
    background-color: #000000e1;
    border-radius: 20px;
`

export const Text = styled.h2`
    margin: 20px 0;
`

export const Form = styled.section`
    display: flex;
`

export const Search = styled.input`
    width: 80%;
    background-color: #80808042;
    border-radius: 20px;
    padding: 5px;
    border: none;
    outline: none;
    margin-right: 10px;
    color: #fff;
`

export const ButtonSearch = styled.button`
    width: 35px;
    height: 35px;
    background-color: #80808042;
    border-radius: 100%;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
`