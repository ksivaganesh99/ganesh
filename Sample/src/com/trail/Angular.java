package com.trail;

import com.database.*;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.database.DbConnection;


public class Angular {
	
	public void postStudentDetails(int id,String name,float marks) {
		
		// TODO Auto-generated method stub
System.out.println("Hello Siva Ganesh");

DbConnection dbconnection = new DbConnection();
Connection conn = dbconnection.dbconnect();
Statement stmt = null;
try {
	stmt= conn.createStatement();
} catch (SQLException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
String sql;
sql="insert  into studentdetails (id,name,marks) values ("+id+",'"+name+"',"+marks+")";

ResultSet rs;
try {
	int n = stmt.executeUpdate(sql);
	System.out.println(n);
} catch (SQLException e1) {
	// TODO Auto-generated catch block
	e1.printStackTrace();
}


	}
	
	
	

/*public String getStudentDetails(@PathParam("id") int id){
	
	System.out.println("get student");
	DbConnection dbconnection = new DbConnection();
	Connection conn = dbconnection.dbconnect();
	Statement stmt = null;
	String sql;
	sql="select * from studentdetails where id is"+id;
	try {
		stmt= conn.createStatement();
		
		ResultSet rs=stmt.executeQuery(sql);
		System.out.println("---------------");
		while(rs.next()){
			System.out.println(rs.getString(id));
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return "success";
	
}*/
	
}
