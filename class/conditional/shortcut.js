/**
 *                        ! এই সিম্বল দ্বারা উল্টে দেওয়া বোঝায়
 *                      একটা দিলে উল্টে যায় আর ২ টা দিলে সেটাও উল্টে যায়
 *           !সত্য  মানে মিথ্যা
 *           !মিথ্যা মানে সত্য
 *
 *             !!সত্য মানে সত্য
 *              !! মিথ্যা মানে মিথ্যা
 *
 *              !আমি গাজা খাই       মানে আমি গাজা খাই না
 *              !! আমি গাজা খাই না        মানে আমি আসলেই খাই না
 */

const isPassed = false;

if (!isPassed) {
  console.log("Sabbas beta");
} else {
  console.log("tui riksha chala kha");
}

!isPassed ? console.log("sabbas bagher baccha") : console.log("riksa vara kor");
