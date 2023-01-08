
export const localeKey = (key, defaultValue) => {

    switch(key) {
        case 'selectAll': return '(모두선택)';
        case 'blanks': return '(공백제외)';
        
        case 'contains': return '포함';
        case 'notContains': return '제외';

        case 'greaterThan': return '초과';
        case 'lessThan': return '미만';
        case 'lessThanOrEqual': return '이하';

        case 'equals': return '같은 경우';
        case 'notEqual': return '같지 않은 경우';

        case 'startsWith': return '시작이 같은 경우';
        case 'endsWith': return '끝이 같은 경우';

        case 'inRange': return '범위 설정';
        case 'empty': return '빈 경우 포함';

        case 'greaterThan': return '초과';
        case 'greaterThanOrEqual': return '이상';

        case 'filterOoo': return '선택해 주세요';
        default : return defaultValue;
    }

};