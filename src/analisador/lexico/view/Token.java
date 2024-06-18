/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package analisador.lexico.view;

/**
 *
 * @author Pedro
 */
public class Token {
    
    
    public String[] delimitadores = {"(", ")", "[", "]", ",", ";", ":", ".."};

        // Array para operadores de comparação
     public   String[] comparacao = {"=", "<>", "<", ">", "<=", ">="};
     public   String[] aritmeticos = {"+","-","/","*"};

        // Array para operadores de atribuição
     public   String[] atribuicao = {":="};
     public   String[] tiposPrimitivos = {"char", "integer", "boolean","sting","float"};
        
        
      public String[] palavras_Reservadas = {"program","if","else","then","write","writeln","readln","read","clrscr","and","nil","set","absolute",
       "end","not","break","array","file","object","shr","asm","for","of","begin","case","const","div",
       "downto","forward","function","goto","in","label","mod","or","packed","procedure","program","end.",
       "record","repeat","integer","type","until","var","while","with","xor",";","(",")",",","_",":"};
}
