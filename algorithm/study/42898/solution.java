class Solution {
    public int solution(int m, int n, int[][] puddles) {        
        int[][] dp = new int[m][n];
        
        for(int i = 0; i < m; i++) {
        	for(int j = 0; j < n; j++) {
        		dp[i][j] = -1;
        	}
        }
        
        dp[0][0] = 1;
        
        for(int[] puddle : puddles) {
        	dp[puddle[0] - 1][puddle[1] - 1] = 0;
        }
        
        for(int i = 0; i < m; i++) {
        	for(int j = 0; j < n; j++) {
        		if(i == 0 && j == 0) continue;
        		if(i == 0) {
        			if(dp[i][j] == -1) dp[i][j] = dp[i][j - 1]; 
        			continue;
        		}
        		if(j == 0) {
        			if(dp[i][j] == -1) dp[i][j] = dp[i - 1][j];
        			continue;
        		}
        		if(dp[i][j] == -1) {
        			dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
        		}
        	}
        }
        
        return dp[m - 1][n - 1];
    }
}