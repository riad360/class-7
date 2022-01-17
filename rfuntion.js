function Result() {

    this.result = (marks) => {
        let gpa;
        let grade;

        if (marks >= 0 && marks < 33) {
            gpa = 0;
            grade = 'F'
        } else if (marks >= 33 && marks < 40) {
            gpa = 1;
            grade = 'D'
        } else if (marks >= 40 && marks < 50) {
            gpa = 2;
            grade = ' C'
        } else if (marks >= 50 && marks < 60) {
            gpa = 3;
            grade = 'B'
        } else if (marks >= 60 && marks < 70) {
            gpa = 3.5;
            grade = 'A-'
        } else if (marks >= 70 && marks < 80) {
            gpa = 4;
            grade = 'A'
        } else if (marks >= 80 && marks <= 100) {
            gpa = 5;
            grade = 'A+'
        } else {
            gpa = 'Invilied'
            grade = 'Invilied'
        }
        return {
            resultGpa: gpa,
            resultGrade: grade,
        }

    }

    this.finalResult = function(bangla, english, math, acc, man, rel, eco)  {

        let cgpa;
        let totalgrad;
        let totalgpa = this.result(bangla).resultGpa + this.result(english).resultGpa + this.result(math).resultGpa + this.result(acc).resultGpa + this.result(man).resultGpa + this.result(rel).resultGpa + this.result(eco).resultGpa;

        cgpa = totalgpa / 7;

        if (bangla < 33 || english < 33 || math < 33 || acc < 33 || man < 33 || rel < 33 || eco < 33) {
            totalgrad = "F"
        } else if (cgpa >= 0 && cgpa < 1) {
            totalgrad = "F"
        } else if (cgpa >= 1 && cgpa < 2) {
            totalgrad = "D"
        } else if ( cgpa >=2 && cgpa <3) {
            totalgpa = "C"
        } else if ( cgpa >= 3 && cgpa <3.5) {
            totalgrad = "B"
        } else if ( cgpa >3.5 && cgpa <4) {
            totalgrad = "A-"
        } else if ( cgpa >=4 && cgpa <5) { 
            totalgrad = "A"
        } else if (cgpa== 5) {
            totalgrad = "A+"
        } 
        return{
            totalCgpa : (totalgrad == "F") ? "Failed" : cgpa.toFixed(2),
            totalResult : totalgrad
        }

    }







}