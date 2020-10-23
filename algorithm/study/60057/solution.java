public class StringCompression {
    public int solution(String s) {
        int l = s.length();
        int answer = l;
    	
        for(int i = 1; i <= l/2; i++) {
        	String sub = s.substring(0,i);
        	String next, result = "";
        	int count = 1;
        	
        	for(int j = i; j < l; j += i) {
        		next = s.substring(j, (j + i > l) ? l : (j + i));
        		
        		if(sub.equals(next)) {
        			count++;
        		}
        		else {
        			result += (count > 1 ? count : "") + sub;
        			
        			sub = next;
        			count = 1;
        		}
        	}
        	
        	result += (count > 1 ? count : "") + sub;
        	answer = answer < result.length() ? answer : result.length();
        }
        
        return answer;
    }
}