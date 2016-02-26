package com.database;

import java.beans.Statement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DbConnection {

	static final String JDBC_DRIVER="com.mysql.jdbc.Driver";
	static final String DB_URL="jdbc:mysql://localhost:3306/firstprod";
	
	static final String USER="root";
	static final String PASS="root";
	
	public static Connection dbconnect() {
	Connection conn=null;
	try {
		Class.forName(JDBC_DRIVER);
		conn=DriverManager.getConnection(DB_URL,USER,PASS);
		/*stmt= conn.createStatement();
		String sql;
		sql="select * from studentdetails";
		ResultSet rs=stmt.executeQuery(sql);
		System.out.println(rs);
		while(rs.next()){
			
			
		}
		conn.close();*/
		
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return conn;
	
	
	}
}
