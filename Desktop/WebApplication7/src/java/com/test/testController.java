/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.test;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Properties;
import javax.print.ServiceUIFactory;
import javax.ws.rs.*;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author HP
 */
@Path("testcontroller")
public class testController {
    
    

    @GET
    @Path("/getData")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<testModel> getdataInJSON() throws ClassNotFoundException, SQLException {
        // System.out.println(EntityResolver.class.getProtectionDomain().getCodeSource().getLocation());

        ArrayList<testModel> tmm = new ArrayList<>();
        String query = "select haberId,haberResim,haberBaslik,haberIcerik,haberTuru,tarih,likes,dislikes,viewCount from haberler order by haberId desc";
        Connection con = null;
        String username = "ozge";
        String password = "12345";
        Class.forName("org.apache.derby.jdbc.ClientDriver");
        con = DriverManager.getConnection("jdbc:derby://localhost:1527/haber", username, password);
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery(query);
        while (rs.next()) {
            testModel tm = new testModel();
            tm.setHaberID(rs.getString("haberId"));
            tm.setHaberResim(rs.getString("haberResim"));
            tm.setHaber_baslik(rs.getString("haberBaslik"));
            tm.setHaber_icerik(rs.getString("haberIcerik"));
            tm.setHaber_turu(rs.getString("haberTuru"));
            tm.setTarih(rs.getString("tarih"));
            tm.setLikes(rs.getInt("likes"));
            tm.setDislike(rs.getInt("dislikes"));
            tm.setViewCount(rs.getInt("viewCount"));
            tmm.add(tm);
        }
        return tmm;

    }

    @GET
    @Path("/insert")
    @Produces(MediaType.APPLICATION_JSON)
    public void arayüz()
    {
        veriAkişi vA=new veriAkişi();
        vA.setVisible(true);
    }
    
    
    
    
    public int insert( String hr, String hb, String hi, String ht,  String tr)  {
       
        Connection conn = null;

        ArrayList<testModel> tmm = new ArrayList<>();
        String query = "insert  into haberler(haberResim,haberBaslik,haberIcerik,haberTuru,tarih) values("+hr+","+hb+","+hi+","+ht+","+tr+")";
        System.out.println(query);
         String username = "ozge";
            String password = "12345";
        try {

           
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection("jdbc:derby://localhost:1527/haber", username, password);
            Statement st = conn.createStatement();
              PreparedStatement pr = conn.prepareStatement("insert  into haberler(haberResim,haberBaslik,haberIcerik,haberTuru,tarih) values (?,?,?,?,?)");
                pr.setString(1, hr);
                pr.setString(2, hb);
                pr.setString(3, hi);
                pr.setString(4, ht);
                pr.setString(5, tr);
               
                pr.executeUpdate();
             veriAkişi vA=new veriAkişi();
              vA.setVisible(false);

            return 1;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    @GET
    @Path("/update/{id}/{nmbr}")
    @Produces(MediaType.APPLICATION_JSON)
    public int update(@PathParam("id") String id, @PathParam("nmbr") String nmbr) {
        ArrayList<testModel> tmm = new ArrayList<>();
        Connection conn = null;
        Statement statement = null;
        int ıd = Integer.valueOf(id);
        int nmb2 = Integer.valueOf(nmbr);
        String query = "select * from haberler where haberId=" + id;
        String username = "ozge";
        String password = "12345";
        try {

            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection("jdbc:derby://localhost:1527/haber", username, password);

            statement = conn.createStatement();
            ResultSet rs = statement.executeQuery(query);

            if (nmb2 == 1) {
                rs.next();
                int likeSayisi = rs.getInt("likes");
                likeSayisi++;
                String quer = "update haberler set likes =" + likeSayisi + " where haberId=" + id;
                statement.executeUpdate(quer);
                return 2;
            } else if (nmb2 == 2) {
                rs.next();
                int dislikeSayisi = rs.getInt("dislikes");
                dislikeSayisi++;
                String quer = "update haberler set dislikes =" + dislikeSayisi + "where haberId=" + id;
                statement.executeUpdate(quer);

            } else if (nmb2 == 3) {
                rs.next();
                int viewCount = rs.getInt("viewCount");
                viewCount++;
                String quer = "update haberler set viewCount =" + viewCount + "where haberId=" + id;
                statement.executeUpdate(quer);

            }
        } catch (Exception e) {
            e.printStackTrace();

        }
        return 1;
    }

    @GET
    @Path("/newnews/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<testModel> newnews(@PathParam("id") String id) {
        ArrayList<testModel> tmm = new ArrayList<>();
        Connection conn = null;
        Statement statement = null;
        String query = "select * from haberler where haberId >" + id + "order by haberId desc";
        String username = "ozge";
        String password = "12345";
        try {
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection("jdbc:derby://localhost:1527/haber", username, password);

            statement = conn.createStatement();
            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                testModel tm = new testModel();
                tm.setHaberID(rs.getString("haberId"));
                tm.setHaberResim(rs.getString("haberResim"));
                tm.setHaber_baslik(rs.getString("haberBaslik"));
                tm.setHaber_icerik(rs.getString("haberIcerik"));
                tm.setHaber_turu(rs.getString("haberTuru"));
                tm.setTarih(rs.getString("tarih"));
                tm.setLikes(rs.getInt("likes"));
                tm.setDislike(rs.getInt("dislikes"));
                tm.setViewCount(rs.getInt("viewCount"));
                tmm.add(tm);

            }
            return tmm;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @GET
    @Path("/returncount")
    @Produces(MediaType.APPLICATION_JSON)
    public String returncount() {
        Connection conn = null;
        Statement statement = null;
        String query = "SELECT COUNT(*) FROM haberler";

        String username = "ozge";
        String password = "12345";
        try {

            Class.forName("org.apache.derby.jdbc.ClientDriver");
            conn = DriverManager.getConnection("jdbc:derby://localhost:1527/haber", username, password);
            int sayac = 0;
            statement = (Statement) conn.createStatement();
            ResultSet rs = statement.executeQuery(query);

            while (rs.next()) {
                sayac = rs.getInt(1);

            }
            return Integer.toString(sayac);
        } catch (Exception e) {
            e.printStackTrace();
            return "aa";
        }
    }

}
