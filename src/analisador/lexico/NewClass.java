/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package analisador.lexico;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author Pedro
 */
public class NewClass {
 public static void main(String[] args) {
    
     HashMap<Integer,String> a  = new HashMap<>();
     a.put(1, "ped");
     a.put(2, "manj");
     a.put(3, "jun");
     a.put(4, "kk");

     System.out.println(a.toString());
     
     for (Map.Entry<Integer, String> entry : a.entrySet()) {
         Object key = entry.getKey();
         Object val = entry.getValue();
         
         System.out.println("key "+key+" Value "+val);
         
     }
}
}