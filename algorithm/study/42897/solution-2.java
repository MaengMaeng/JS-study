import java.util.Arrays;

class Solution {
    public int solution(int[] money) {
    	int length = money.length;
    
        int[][] newMoneys = {Arrays.copyOfRange(money, 1, length), Arrays.copyOfRange(money, 0, length - 1)};
        int[] results = new int[2];
        
        for(int i = 0; i < 2; i++) {
        	results[i] = dp(newMoneys[i]);
        }
                
        return results[0] > results[1] ? results[0] : results[1];
    }
    
    public int dp(int[] money) {
        int length = money.length;

        int[] dp = new int[length];
        boolean[] check = new boolean[length];
        
        dp[0] = money[0];
        check[0] = true;
        dp[1] = money[0] > money[1] ? money[0] : money[1];
        check[1] = money[1] > money[0];
        		
        for(int i = 2; i < length; i++) {
        	int a = dp[i - 1];
        	int b = dp[i - 2] +  money[i];
        	
        	if(a > b) {
        		dp[i] = a;
        	}
        	else {
        		dp[i] = b;
        		check[i] = true;
        	}
        }
                
        return dp[length - 1];
    }
}