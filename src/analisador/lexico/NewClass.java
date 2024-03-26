/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package analisador.lexico;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author Pedro
 */
public class NewClass {
 
 public static void main(String[] args) {
        // Exemplo de texto contendo a instrução Pascal
        String texto = "program\n" +
                "var\n" +
                "nome :String;\n" +
                "idade : integer ;\n" +
                "peso : integer;\n" +
                "begin idade:=3\n" +
                "if(idade>3)\n" +
                "return\n" +
                "end";

        // Define a expressão regular para separar os tokens
        Pattern pattern = Pattern.compile("\\b(if|then|else|begin|end|program|var|integer|String|return)\\b|:=|:|[;()\\s]|\\b[a-zA-Z]+\\b|\\d+|>");

        // Cria um objeto Matcher para encontrar correspondências na instrução
        Matcher matcher = pattern.matcher(texto);

        // Cria uma fila para armazenar os tokens
        Queue<String> tokens = new LinkedList<>();

        // Adiciona os tokens à fila
        while (matcher.find()) {
            String token = matcher.group().trim();
            if (!token.isEmpty()) {
                tokens.offer(token);
            }
        }

        // Exibe os tokens separados
        while (!tokens.isEmpty()) {
            System.out.println(tokens.poll());
        }
    }
}
