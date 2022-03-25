package com.hindalco.bankapp2.model;

public class SavingAccount extends BankAccount {

	private static final double MIN_BAL = 1000.00;
	private boolean isSalary = false;

	public SavingAccount() {
		super();

	}

	public SavingAccount(String accName, double balance, boolean isSalary) {
		super(accName, balance);
		this.isSalary = isSalary;
	}

	public SavingAccount(int accNo, String accName, double balance, boolean isSalary) {
		super(accNo, accName, balance);
		this.isSalary = isSalary;
	}

	public boolean isSalary() {
		return isSalary;
	}

	public void setSalary(boolean isSalary) {
		this.isSalary = isSalary;
	}

	public static double getMinBal() {
		return MIN_BAL;
	}

	@Override
	public String toString() {
		return getAccNo()+" "+getAccName()+" "+balance+" "+isSalary;
	}

	@Override
	public String withdraw(double amount) {
		if((balance-amount)>=MIN_BAL) {
			this.balance=this.balance-amount;
			return amount+" debited";
		}
		return "Insufficient balance";
		
	}
}
