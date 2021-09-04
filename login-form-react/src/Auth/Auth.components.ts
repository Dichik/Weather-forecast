import styled from 'styled-components';

export const AuthForm = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`;

export const InputField = styled.input `
    position: absolute;
    width: 288px;
    height: 50px;
    left: 590px;
    
    background: #FFFFFF;
    border: 1px solid #29E8FF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 163, 255, 0.25);
    border-radius: 15px;
    outline: none;
    
    padding-left: 25px;
    
    font-family: Josefin Sans, sans serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    
    color: rgba(0, 0, 0, 0.5);
`;

export const ButtonSubmit = styled.button `
    position: absolute;
    top: 377px;
    left: 590px;
    width: 280px;
    height: 50px;
    
    background: #53EDFF;
    border: 1px solid rgba(68, 68, 68, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 163, 255, 0.25);
    border-radius: 15px;
    
    font-size: 25px;
    font-family: 'Josefin Sans', sans-serif;
    
    align-items: center;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    padding-top: 9px;  
`;

