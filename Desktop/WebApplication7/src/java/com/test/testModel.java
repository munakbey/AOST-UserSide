package com.test;


/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author HP
 */
public class testModel {
    private String haber;
    private String haberID;
    private String haberResim;
    private String haber_baslik;
    private String haber_icerik;
    private String haber_turu;
    private String tarih;
    private int likes;
    private int dislike;
    private int viewCount;

    public int getViewCount() {
        return viewCount;
    }

    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }
    
     public String getHaberID() {
        return haberID;
    }

    public void setHaberID(String haberID) {
        this.haberID = haberID;
    }

    public String getHaberResim() {
        return haberResim;
    }

    public void setHaberResim(String haberResim) {
        this.haberResim = haberResim;
    }

    public String getHaber_baslik() {
        return haber_baslik;
    }

    public void setHaber_baslik(String haber_baslik) {
        this.haber_baslik = haber_baslik;
    }

    public String getHaber_icerik() {
        return haber_icerik;
    }

    public void setHaber_icerik(String haber_icerik) {
        this.haber_icerik = haber_icerik;
    }

    public String getHaber_turu() {
        return haber_turu;
    }

    public void setHaber_turu(String haber_turu) {
        this.haber_turu = haber_turu;
    }

    public String getTarih() {
        return tarih;
    }

    public void setTarih(String tarih) {
        this.tarih = tarih;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislike() {
        return dislike;
    }

    public void setDislike(int dislike) {
        this.dislike = dislike;
    }
    
    
}
