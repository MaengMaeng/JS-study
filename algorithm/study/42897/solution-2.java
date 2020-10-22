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
        int[] dp = new int[money.length];
        
        dp[0] = money[0];
        dp[1] = money[0] > money[1] ? money[0] : money[1];
        		
        for(int i = 2; i < money.length; i++) {
            dp[i] = (dp[i - 1] > (dp[i - 2] + money[i])) ? dp[i - 1] : (dp[i - 2] +  money[i])
        }
                
        return dp[money.length - 1];
    }
}