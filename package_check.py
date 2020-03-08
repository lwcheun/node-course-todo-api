#!/usr/bin/env python

import os


class PackageChecker:
    """
    Check packages used and output related information
    """

    def Check_Package(self, option=None):
        try:
            print("Opening file")
            fh = open("checked_packages", "w")

            try:
                packages = os.popen('npm outdated --long').readlines()
                package_name_array = []

                for package in packages:
                    fh.write(package)
                    # print(package, end='')
                    package_name = package.split(' ')
                    # print(package_name[0]) 
                    package_name_array.append(package_name[0])

                fh.write('\n')

                for i in range(1, len(package_name_array)):
        
                    if option != "ll":
                        fh.write('Package: {} | '.format(package_name_array[i]))
                        view_info = os.popen('npm view {} dist-tags time.modified'.format(package_name_array[i])).readlines() 
                        for info in view_info:
                            # print(info, end='')
                            fh.write(info)

                    fh.write('\n')

                    if option != "view":
                        more_info = os.popen('npm ll --depth=0 {}'.format(package_name_array[i])).readlines()    
                        for info in more_info:
                            # print(info, end='')
                            fh.write(info)

            finally:
                print("Closing file")
                fh.close()

        except IOError:
            print("Error: finding file or reading data")



if __name__ == "__main__":
    opt = str(input("Choose an option: 'll', 'view', or leave empty: "))
    allowed = ["ll", "view", ""]

    if opt not in allowed:
        print("invalid option")
    if opt == "ll":
        PackageChecker().Check_Package("ll")
    if opt == "view":
        PackageChecker().Check_Package("view")
    if opt == "":
        PackageChecker().Check_Package()